import Hero from "@/components/Hero";
import { VStack } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Features from "@/components/Features";
import PlanA from "@/components/PlanA";
import Footer from "@/components/Footer";
import SignupForm from "@/components/SignupForm"

export default function Home() {
    return (
        <>
            <Nav />
            <VStack w="full" mx="auto" spacing="24px" maxW="1200px" pt="4.5rem">
                <Hero />
                <Features />
                <PlanA />
                <SignupForm />
                <Footer />
            </VStack>
        </>
    );
}
