
import { ref } from "vue";
export function useTheme(){
    const getTheme= () =>{
        return document.querySelector('html')?.className;
    }

    const toggleTheme = () => {
        const themeClass = getTheme();
        if (themeClass === 'dark') {
            setTheme('light');
        }
        else {
            setTheme('dark');
        }
    }
    const setTheme = (theme: string) => {
        document.querySelector('html')!.className = theme;
        window.localStorage.setItem('theme', theme)
    }

    return {
        getTheme,
        setTheme,
        toggleTheme
    }

}