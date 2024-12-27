import React, { useEffect, useState } from 'react';

// Component for handling section animations
const AnimatedSection = ({ id, className = '', children }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById(id);
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, [id]);

    return (
        <section
            id={id}
            className={`min-h-screen py-20 px-4 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${className}`}
        >
            {children}
        </section>
    );
};

export default AnimatedSection;