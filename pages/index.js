import Hero from "@/components/Hero";
import { VStack } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Nav />
            <VStack w="full" mx="auto" spacing="24px" maxW="1200px" pt="4.5rem">
                <Hero />
                <Features />
                <Pricing />
                <Footer />
            </VStack>
        </>
    );
}
