import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Uncomment this if you want to use Fontawesome as your default icon library
// import { aliases, fa } from "vuetify/iconsets/fa";

// Custom Theme

// var myCustomLightTheme = {
//     dark: false,
//     colors: {
//         background: "#F8FAFF",
//         surface: "#F8FAFF",
//         primary: "#7D74FF",
//         "primary-navigation": "#F3F3FA",
//         "primary-darken-1": "#3700B3",
//         secondary: "#03DAC6",
//         "secondary-darken-1": "#018786",
//         error: "#B00020",
//         info: "#2196F3",
//         success: "#4CAF50",
//         warning: "#FB8C00",
//         "everhome-blue": "#7d74ff",
//     },
// };

const vuetify = createVuetify({
    components,
    directives,

    // Uncomment this if you want to use Fontawesome as your default icon library

    // icons: {
    //     defaultSet: "fa",
    //     aliases,
    //     sets: {
    //         fa,
    //     },
    // },

    // Uncomment this to enable custom theme

    // theme: {
    //     defaultTheme: "myCustomLightTheme",
    //     themes: {
    //         myCustomLightTheme,
    //     },
    // },
});

export default vuetify;
