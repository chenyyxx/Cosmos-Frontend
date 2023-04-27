import Tables from "/components/Tables/Tables";

// Chakra imports
import { ChakraProvider, Portal, useDisclosure, VStack } from '@chakra-ui/react';
// Layout components
import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import React, { useState } from 'react';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
// Custom Chakra theme
import theme from 'theme/theme.js';
// Custom components
import MainPanel from '../components/Layout/MainPanel';
import PanelContainer from '../components/Layout/PanelContainer';
import PanelContent from '../components/Layout/PanelContent';
import Configurator from 'components/Configurator/Configurator';
export default function Dashboard(props) {
	const { ...rest } = props;
	// states and functions
	const [ fixed, setFixed ] = useState(true);

	// This changes navbar state(fixed or not)
	const getActiveNavbar = (routes) => {
		let activeNavbar = false;
		for (let i = 0; i < routes.length; i++) {
			if (routes[i].category) {
				let categoryActiveNavbar = getActiveNavbar(routes[i].views);
				if (categoryActiveNavbar !== activeNavbar) {
					return categoryActiveNavbar;
				}
			} else {
				if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
					if (routes[i].secondaryNavbar) {
						return routes[i].secondaryNavbar;
					}
				}
			}
		}
		return activeNavbar;
	};

	const { isOpen, onOpen, onClose } = useDisclosure();
	// document.documentElement.dir = 'ltr';
	// Chakra Color Mode
	return (
		<ChakraProvider theme={theme} resetCss={false}>
            <VStack w="full" mx="auto" spacing="24px" maxW="1200px">
                <MainPanel
                    w={{
                        base: '100%',
                        xl: 'calc(100%)'
                    }}>
                    <Portal>
                        <AdminNavbar
                            onOpen={onOpen}
                            logoText={'PURITY UI DASHBOARD'}
                            brandText={'Cosmos Dashboard'}
                            // secondary={getActiveNavbar(routes)}
                            fixed={fixed}
                            {...rest}
                        />
                    </Portal>
                        <PanelContent>
                            <PanelContainer>
                                <Tables/>
                            </PanelContainer>
                        </PanelContent>
                </MainPanel>
                <Configurator
                        isOpen={isOpen}
                        onClose={onClose}
                        isChecked={fixed}
                        onSwitch={(value) => {
                            setFixed(value);
                        }}
                        onOpaque={() => setSidebarVariant('opaque')}
                        onTransparent={() => setSidebarVariant('transparent')}
                    />
            </VStack>
			
		</ChakraProvider>
	);
}
