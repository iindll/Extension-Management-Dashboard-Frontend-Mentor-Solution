 window.addEventListener('DOMContentLoaded', () => {
  const monMode = document.querySelector('.moon');
const sunMode = document.querySelector('.sun');
const mode = document.querySelector(".mode")
const descreption = document.querySelectorAll(".descreption p");
const logocontainer = document.querySelector('.ExtentionLogoContainer')
const Exbuttons=document.querySelectorAll('.ExtentionListContainer .Extentionbuttons button')
const ExtentionP = document.querySelector('.ExtentionP')
const ExtensionsIcon =document.querySelector('.ExtensionsIcon img')



mode.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('darkmode');
  document.body.classList.toggle('lightmode');
  const RemoveButtons = document.querySelectorAll(".Featur .down button")

  if (isDark) {
    monMode.style.display = "none";
    sunMode.style.display = "block";
//     Features.forEach(feature => {
//       feature.style.backgroundColor = "hsl(225, 23%, 24%)";
// feature.style.border = "1px solid rgba(255, 255, 255, 0.3)";


//     });

//     RemoveButtons.forEach(button => {
//         button.style.backgroundColor = "hsl(225, 23%, 24%)";
//         button.style.border = "1px solid rgba(255, 255, 255, 0.3)";
//         button.style.color = "white";
//       });

//       descreption.forEach(p=>{
//         p.style.color="white"
//       })

//       logocontainer.style.backgroundColor = "hsl(225, 23%, 24%)"
//       sunMode.style.backgroundColor = "hsl(225, 23%, 24%)"
//        sunMode.addEventListener('mouseenter', () => {
//     sunMode.style.boxShadow = "0 4px 10px rgba(255, 255, 255, 0.2)";
//   });

//   // Remove hover style on mouse leave
//   sunMode.addEventListener('mouseleave', () => {
//     sunMode.style.boxShadow = "none";
//   });


//   Exbuttons.forEach(button => {
//       button.style.backgroundColor = "hsl(225, 23%, 24%)";
//       console.log(button)
//       button.style.color = "white"

//       button.addEventListener('mouseenter', () => {
//         button.style.backgroundColor=" hsl(3, 77%, 44%)"
//     button.style.boxShadow = "0 4px 10px rgba(255, 255, 255, 0.2)";
//   });

//   button.addEventListener('mouseleave', () => {
//     button.style.backgroundColor="hsl(225, 23%, 24%)"
//     button.style.boxShadow = "none";
//   });

//     })


//     ExtentionP.style.color="white"
//     ExtensionsIcon.style.color ="white"



  } else {



    // LightMode
    monMode.style.display = "block";
    sunMode.style.display = "none";
  }
  });
  });
//     Features.forEach(feature => {
//       feature.style.backgroundColor = "white"; // dark background for features
//     });

//     RemoveButtons.forEach(button => {
//         button.style.backgroundColor = "#eeee";
//         button.style.border = "1px solid rgba(255, 255, 255, 0.3)";
//         button.style.color = "black";
//         button.addEventListener('mouseenter', () => {
//         button.style.color="white"
//         button.style.backgroundColor="hsl(3, 71%, 56%)";
//   });
//   button.addEventListener('mouseleave', () => {
//     button.style.color="black"
//         button.style.backgroundColor="#eeee";
//   });
//       });

//       descreption.forEach(p=>{
//         p.style.color="balck"
//       })

//       logocontainer.style.backgroundColor = "hsl(225, 23%, 24%)"
//       sunMode.style.backgroundColor = "hsl(225, 23%, 24%)"
//        sunMode.addEventListener('mouseenter', () => {
//     sunMode.style.boxShadow = "0 4px 10px rgba(255, 255, 255, 0.2)";
//   });

//   // Remove hover style on mouse leave
//   sunMode.addEventListener('mouseleave', () => {
//     sunMode.style.boxShadow = "none";
//   });


//   Exbuttons.forEach(button => {
//       button.style.backgroundColor = "hsl(225, 23%, 24%)";
//       console.log(button)
//       button.style.color = "white"

//       button.addEventListener('mouseenter', () => {
//         button.style.backgroundColor=" hsl(3, 77%, 44%)"
//     button.style.boxShadow = "0 4px 10px rgba(255, 255, 255, 0.2)";
//   });

//   button.addEventListener('mouseleave', () => {
//     button.style.backgroundColor="hsl(225, 23%, 24%)"
//     button.style.boxShadow = "none";
//   });

//     })


//     ExtentionP.style.color="white"
//     ExtensionsIcon.style.color ="white"
//   }
// });

  
// })

const Features = document.querySelectorAll(".Featur");
const allButton = document.querySelector('.All');
const inactiveButton = document.querySelector('.Inactive');
const activeButton = document.querySelector('.Active');
const removebutton = document.querySelector('remove')

document.querySelectorAll('.ActiveContainer input[type="checkbox"]').forEach((checkbox) => {
  checkbox.classList.add('inactive');

  checkbox.addEventListener('change', function () {
    const featurBox = this.closest('.Featur');

    if (this.checked) {
      featurBox.classList.add('active');
      featurBox.classList.remove('inactive');
    } else {
      featurBox.classList.add('inactive');
      featurBox.classList.remove('active');
    }
  });
});

activeButton.addEventListener('click', () => {
  Features.forEach((featurBox) => {
    const checkbox = featurBox.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      featurBox.style.display = "block";
    } else {
      featurBox.style.display = "none";
    }
  });
});

inactiveButton.addEventListener('click', () => {
  Features.forEach((featurBox) => {
    const checkbox = featurBox.querySelector('input[type="checkbox"]');
    if (!checkbox.checked) {
      featurBox.style.display = "block";
    } else {
      featurBox.style.display = "none";
    }
  });
});

allButton.addEventListener('click', () => {
  Features.forEach((featurBox) => {
    featurBox.style.display = "block";
  });
});

document.querySelectorAll('.down button').forEach((removebutton) => {
  removebutton.addEventListener('click', () => {
    const FeaturCard = removebutton.closest('.Featur');
    if (FeaturCard) {
      FeaturCard.style.display = 'none';
    }
  });
});
