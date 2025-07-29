import React, { createContext, useEffect, useRef, useState, useContext } from "react";

import { UserContext } from "./userContext";

export const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
    const bingInterval = useRef(null);

    const socketRef = useRef(null);
    const { user, setUser } = useContext(UserContext);
    
    const [isConnected, setIsConnected] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const ws = new WebSocket("wss://vimi-server.ean.vn:3001");

        ws.onopen = () => {
            console.log("WebSocket connected");
            socketRef.current = ws;
            setIsConnected(true);
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log("Socket event:", data);

            setEvents(prev => [...prev, data]);
        };

        ws.onerror = (err) => setIsConnected(false);
        ws.onclose = () => setIsConnected(false);


        return () => ws.close();
    }, []);

    useEffect(() => {
        if (user == null || !isConnected)
            return;
        
        if (bingInterval.current != null)
            clearInterval(bingInterval.current);

        bingInterval.current = setInterval(() => {
            console.log("Bing");

            socketRef.current?.send(JSON.stringify({
                type: "bing",
                token: user.token
            }));
        }, 5000);
    }, [user]);

    return (
        <SocketContext.Provider value={{ socketRef, events, isConnected }}>
            {children}
        </SocketContext.Provider>
    );
};
