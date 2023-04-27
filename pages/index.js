import Hero from "@/components/Hero";
import { VStack } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Features from "@/components/Features";
import PlanB from "@/components/PlanB";
import Footer from "@/components/Footer";
import SignupForm from "@/components/SignupForm"
import {useRef} from 'react';

export default function Home() {
    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
      };
    return (
        <>
            <Nav handleClick={handleClick} />
            <VStack w="full" mx="auto" spacing="24px" maxW="1200px" pt="4.5rem">
                <Hero  handleClick={handleClick} />
                <Features />
                <PlanB handleClick={handleClick} />
                <SignupForm ref={ref} />
                <Footer />
            </VStack>
        </>
    );
}