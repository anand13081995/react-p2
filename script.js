let MyFirstReactComponent = ()=>{


    const mboxStyle = {
        backgroundColor: 'white',
        margin: 'auto',
        marginTop : '5%',
        width: '800px',
        borderRadius: '8px'
    };

    const textStyle = {
        paddingLeft : '40px',
        marginBottom : '2%',
        fontSize : '20px',
        paddingRight : '40px'
    };

    const mbtm = {
        marginBottom : '3%'
    }


    return (
        <div style={mboxStyle}>
        <h1 style ={{paddingTop : '5%' , paddingLeft: '40px'}}>Learn Web Development</h1>
        <p style ={textStyle}>Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.</p>
        <p style ={textStyle}>The aim of the area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable". From there, you should be able to start making your way, learning from <a href= "#">the rest of MDN</a>, and other intermediate to advanced resources that assume a lot of previous knowledge.</p>
        <p style ={{...textStyle , paddingBottom : '5%'}}>If you are a complete beginner, web development can be challenging - we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.</p>
        </div>
    )
}

ReactDOM.render(<MyFirstReactComponent/> , document.querySelector('#react-root'));