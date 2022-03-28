const theme = document.querySelectorAll('.theme')

theme.forEach((item) => {
    item.addEventListener('click' , (e) =>{
        console.log(e.target.id);
        document.body.classList.remove("lightTheme" , "darkTheme");
        switch (e.target.id) {
            case "light" :
                document.body.classList.add("lightTheme")
                break
            case "dark" :
                document.body.classList.add("darkTheme")
                break
            default :
                null;
        }
    })
})