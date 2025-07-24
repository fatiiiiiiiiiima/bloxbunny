"use client"
import React, { useState, useRef, useEffect } from 'react';

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    const [answerHeight, setAnswerHeight] = useState(0);
    const answerRef = useRef(null);

    useEffect(() => {
        if (answerRef.current) {
            setAnswerHeight(isOpen ? answerRef.current.scrollHeight : 0);
        }
    }, [isOpen, answerRef]);

    return (
        <div className="faq-item">
            <div className="faq-question-container" onClick={() => setIsOpen(!isOpen)}>
                <h3 className="faq-question">{question}</h3>
            </div>
            <div ref={answerRef} className="faq-answer" style={{ maxHeight: `${answerHeight}px` }}>
                <p>{answer}</p>
            </div>
        </div>
    );
}

export default FAQItem;


