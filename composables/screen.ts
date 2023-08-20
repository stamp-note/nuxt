
export function useResizeObserver(){
    const nuxtApp = useNuxtApp()

    const windowWidth = ref(window.innerWidth);
    const windowHeight = ref(window.innerHeight);

    nuxtApp.provide('windowResize', () => {
        windowWidth.value = window.innerWidth;
        windowHeight.value = window.innerHeight;
    })

    return {
        windowWidth,
        windowHeight
    }


}