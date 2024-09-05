document.getElementById('footerButton').addEventListener('click', function() {
        alert('\n Hi there 😅!\n ^____^');
    });

const profileImg = document.getElementsByClassName('profile-img')[0]
profileImg.addEventListener('mouseenter',()=>{
    document.body.style.background="url('dog.jpg') repeat ";
    profileImg.src  = "prof.png";
})

profileImg.addEventListener('mouseleave',()=>{
    document.body.style.background="hsl(96, 52%, 58%)";
    profileImg.src = "me.jpg";
})
