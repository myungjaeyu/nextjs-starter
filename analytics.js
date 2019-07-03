import ReactGA from 'react-ga'

export const initGA = () => {

    const trackingCode = 'UA-xxxxxxxxx-1'

    console.log(`GA init ${ trackingCode }`)

    ReactGA.initialize(trackingCode)

}