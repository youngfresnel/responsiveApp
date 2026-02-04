import React, { useRef, useState } from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Pressable, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import useAppTheme from  '../../Hooks/useAppTheme'; // Importe ton hook
import FirstPage from './firstPage';
import SecondPage from './secondPage';
import ThirdPage from './thirdPage';
import { scale } from '../../responsiveSize';

const { width } = Dimensions.get('window');

const ScrollPager = () => {
    const scrollRef = useRef<ScrollView>(null);
    const [activePage, setActivePage] = useState(0);
    const { colors } = useAppTheme(); 

    const Pages = [
        { id: 1, component: <FirstPage /> },
        { id: 2, component: <SecondPage /> },
        { id: 3, component: <ThirdPage /> },
    ];

    // Fonction pour calculer la page active pendant le scroll
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollOffset = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(scrollOffset / width);
        if (currentIndex !== activePage) {
            setActivePage(currentIndex);
        }
    };

    // Fonction pour scroller au clic sur un point
    const scrollToPage = (index: number) => {
        scrollRef.current?.scrollTo({
            x: index * width,
            animated: true,
        });
    };

    return (
        <View style={[styles.container, {backgroundColor:colors.bgOnboardingColor}]}>
            <ScrollView
                ref={scrollRef}
                horizontal
                pagingEnabled // Force l'arrêt sur chaque page
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16} // Pour une détection fluide
                style={styles.scrollView}
            >
                {Pages.map((page) => (
                    <View key={page.id} style={[styles.page, { width }]}>
                        {page.component}
                    </View>
                ))}
            </ScrollView>

            {/* Indicateurs */}
            <View style={styles.indicatorContainer}>
                {Pages.map((_, index) => {
                    const isActive = activePage === index;
                    return (
                        <Pressable
                            key={index}
                            
                            style={[
                                styles.dot,
                                { backgroundColor: isActive ? colors.BoutonColor : '#EAEAFF'},
                                isActive ? styles.activeDot : styles.inactiveDot
                            ]}
                        />
                    );
                })}
            </View>
        </View>
    );
};

export default ScrollPager;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    scrollView: {
        flex: 1,
    },
    page: {
        flex: 1,
        
    },
    indicatorContainer: {
        flexDirection: 'row',
        paddingVertical:scale(130),
        position: 'absolute', 
        bottom: 50,
        alignSelf: 'center'
    },
    dot: {
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDot: {
        width: 30,
    },
    inactiveDot: {
        width: 10,
        opacity: 0.5,
    },
});
