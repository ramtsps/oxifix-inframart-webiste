// hooks/useAos.ts (Simplified version)
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const useAOS = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,

            // Faster animation settings:
            offset: 10, // Very small offset to trigger early
            delay: 0,
            duration: 400, // Reduced from 800ms to 400ms (2x faster)
            easing: 'ease-out', // Faster easing for quicker animation
            once: true,
            mirror: false,
            anchorPlacement: 'top-top', // Triggers when top of element reaches top of viewport
        });

        AOS.refresh();

        return () => {
            AOS.refresh();
        };
    }, []);
};