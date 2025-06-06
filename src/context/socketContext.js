import React, { createContext, useEffect, useRef, useState } from "react";

export const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
    const socketRef = useRef(null);
    const [isConnected, setIsConnected] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const ws = new WebSocket("ws://160.187.246.117:7010");

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

    return (
        <SocketContext.Provider value={{ socketRef, events, isConnected }}>
            {children}
        </SocketContext.Provider>
    );
};
