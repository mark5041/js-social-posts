const MainInfoObj = [
    {
        UserName: 'Mark',
        UserSurname: 'Beloso',
        photo: '',
        date: '12-10-2021',
        text: 'pippo',
        image: 'https://unsplash.it/300/300?image=',
        likes : 140,
    },
    {
        UserName: 'Mark',
        UserSurname: 'Beloso',
        photo: '',
        date: '12-10-2021',
        text: 'pippo',
        image: 'https://unsplash.it/300/300?image=',
        likes : 80,
    },
    {
        UserName: 'Mark',
        UserSurname: 'Beloso',
        photo: '',
        date: '12-10-2021',
        text: 'pippo',
        image: 'https://unsplash.it/300/300?image=',
        likes : 120,
    }
];

const container = document.getElementById("container");

function StringConvertionIntoDate(string)
{
    const d = new Date(string);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

    console.log(`${da}-${mo}-${ye}`)
}

console.log(StringConvertionIntoDate("11/25/2021"));

function generatePostCard(array, box)
{
    box.innerHTML = '';
    for(let i = 0; i < array.length; i++)
    {
        let ObjElement = array[i];
        let ObjProfileClass;
        if(ObjElement.photo == '')
        {
            
            let profileNameInitial = ObjElement.UserName[0]+ObjElement.UserSurname[0];
            ObjProfileClass = `<span class="profile-pic-default">${profileNameInitial}</span>`;
        }
        else
        {
            ObjProfileClass = `<img class="profile-pic" src="${ObjElement.photo}" alt="Phil Mangione"> `;
        }



        let card = `
            <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            ${ObjProfileClass}
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${ObjElement.UserName} ${ObjElement.UserSurname}</div>
                            <div class="post-meta__time">${ObjElement.date}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
                <div class="post__image">
                    <img src="${ObjElement.image}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="1">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${ObjElement.likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>
        `;
        box.innerHTML += card;
    }
}

generatePostCard(MainInfoObj, container);