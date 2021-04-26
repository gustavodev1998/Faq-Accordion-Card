var faqTitles = document.querySelectorAll('.faq-question-title span');
var faqArrows = document.querySelectorAll('.faq-question-title img');
var faqDescription = document.querySelectorAll('.faq-question-description');


faqTitles.forEach ( (titles) => {
    titles.addEventListener('click', () =>{
        hideFaqDescription();
        rotateArrow();
        resetTitle();
        titles.parentElement.nextElementSibling.classList.add('show-faq-question-description');
        titles.nextElementSibling.classList.add('arrow-rotate');
        titles.parentElement.classList.add('active-title'); 
    });
});

faqArrows.forEach( (arrow) => {
  arrow.addEventListener('click', () => {
        hideFaqDescription();
        rotateArrow();
        resetTitle();
        arrow.parentElement.nextElementSibling.classList.add('show-faq-question-description');
        arrow.classList.add('arrow-rotate');
        arrow.parentElement.classList.add('active-title');
  });  
});



function hideFaqDescription() {
    faqDescription.forEach( (desc) => {
        desc.classList.remove('show-faq-question-description');
    });
}


function rotateArrow() {
    faqArrows.forEach( (arrow) => {
        arrow.classList.remove('arrow-rotate');
    });
}

function resetTitle() {
    faqTitles.forEach( (title) => {
        title.parentElement.classList.remove('active-title');
    });
}