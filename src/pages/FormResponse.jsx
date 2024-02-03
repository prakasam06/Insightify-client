import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "../config/axios";
import { getResponse } from '../api/getResponse';
import { useParams } from "react-router-dom";

export default function FormResponse() {
    const [responses, setResponses] = useState([]);
    const params = useParams();
    
    useEffect(() => {
        (async () => {
            const data = await getResponse(params.id);
            let arr = [];
    
            for (let i = 0; i < data.data.response.length; i++) {
                arr.push(data.data.response[i].responseJson);
            }
    
            setResponses((prevResponses) => [...prevResponses, ...arr]);
        })();
    }, []);
    
    console.log("Outside useEffect - responses:", responses);
    
    return (
        <div>
        <h3>Responses</h3>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Response</th>
                <th>Submitted At</th>
            </tr>
            </thead>
            <tbody>
            {responses.map((response, index) => (
    <tr key={index}>
        <td>
            {Object.entries(response).map(([key, value], innerIndex) => (
                <div key={innerIndex}>
                    <span>{key}:</span> {value}
                </div>
            ))}
        </td>
        <td>{new Date().toLocaleString()}</td>
    </tr>
))}

            </tbody>
        </table>
        </div>
    );
    }