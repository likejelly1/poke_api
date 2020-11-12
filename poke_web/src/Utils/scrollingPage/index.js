const scrollingPage = (props) => {
    window.scrollTo({
        top: props.refPage.current.offsetTop - 30,
        behavior:"smooth"
    })
}

export default scrollingPage
