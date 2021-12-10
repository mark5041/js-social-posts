const MainInfoObj = [
    {
        UserName: 'Mark',
        UserSurname: 'Beloso',
        photo: 'https://unsplash.it/300/300?image=' + random(1, 150),
        date: '12-10-2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        image: 'https://unsplash.it/300/300?image=' + random(1, 150),
        likes : random(1, 150),
    },
    {
        UserName: 'Mark',
        UserSurname: 'Beloso',
        photo: '',
        date: '12-10-2021',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nam magnam nesciunt quaerat repellat tempora, libero id dignissimos ullam ad, ipsum ab iusto deleniti voluptates reprehenderit facilis quod vel amet!',
        image: 'https://unsplash.it/300/300?image=' + random(1, 150),
        likes : random(1, 150),
    },
    {
        UserName: 'Mark',
        UserSurname: 'Beloso',
        photo: '',
        date: '12-10-2021',
        text: 'Vitae nam magnam nesciunt quaerat repellat tempora, libero id dignissimos ullam ad, ipsum ab iusto deleniti voluptates reprehenderit facilis quod vel amet!',
        image: 'https://unsplash.it/300/300?image=' + random(1, 150),
        likes : random(1, 150),
    }
];

const container = document.getElementById("container");

function StringConvertionIntoDate(string)
{
    const d = new Date(string);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${da}-${mo}-${ye}`;
}

function random(min, max)
{
    return Math.floor(Math.random() * max) + min;
}

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

        let Objdate = StringConvertionIntoDate(ObjElement.date);

        let card = `
            <div class="post number${i + 1}">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            ${ObjProfileClass}
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${ObjElement.UserName} ${ObjElement.UserSurname}</div>
                            <div class="post-meta__time">${Objdate}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${ObjElement.text}</div>
                <div class="post__image">
                    <img src="${ObjElement.image}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="${i + 1}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${i + 1}" class="js-likes-counter">${ObjElement.likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>
        `;
        box.innerHTML += card;
    }
}

generatePostCard(MainInfoObj, container);

const PostCardFooter = document.querySelectorAll(".post__footer");

for(let i = 0; i < PostCardFooter.length; i++)
{
    let button = PostCardFooter[i].querySelector(".like-button");
    let likeBox = PostCardFooter[i].querySelector(".js-likes-counter");
    button.addEventListener("click", 
        function()
        {
            let numLikes = parseInt(likeBox.innerHTML);
            if(this.classList.contains("like-button--liked"))
            {
                this.classList.remove('like-button--liked');
                numLikes --;
                event.preventDefault();
            }
            else
            {
                this.classList.add('like-button--liked');
                numLikes ++;
                event.preventDefault();
            }
            likeBox.innerHTML = numLikes;
        }
    )
}