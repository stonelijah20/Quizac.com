import imglogo from '../Assests/Images/Navigation/logo.png'
export const image = {logoimg: imglogo, text: "logo_image"}
const NavigationContent = [
    {
        navelement: "Home",
        dir: "/"
    },
    {
        navelement: "FAQs",
        dir: "/faqs"
    }
    ,{
        navelement: "contributor",
        dir: "/contributor"
    }
    ,{
        navelement: "blog",
        dir: "/blog"
    },
    {
        navelement: "Contact-Us",
        dir: "/contactus"
    },
    {
        navelement: "Covid-19",
        dir: "/covid19"
    },
    {
        navelement: "Offer",
        dir: "/offer"
    }
]

export const login = {ele: 'Log in', dir: "/login"} 
export const signup = {ele: 'Sign up', dir: "/signup"}

export default NavigationContent