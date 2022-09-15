function createDogListItem(dog) {
  const li = document.createElement("li");
  const dogContainer = document.querySelector(".main");

  li.className = "dogs-list__button";
  li.innerText = dog.name;
  dogContainer.append(li);

  li.addEventListener("click", () => {
    dogContainer.innerHTML = "";

    let card = createDogCard(dog);
    dogContainer.append(card);
  });
  return li;
}

function createSection() {
  const section = document.createElement("section");
  section.className = "main__dog-section";
  return section;
}

const createDogCardDesc = (bio) => {
  const div = document.createElement("div");
  div.className = "main__dog-section__desc";

  const header = document.createElement("h3");
  header.innerText = "Bio";
  const text = document.createElement("p");
  text.innerText = bio;
  div.append(header, text);

  return div;
};

function createDogCardBottomSection(dog) {
  const button = document.createElement("button");
  const text = document.createElement("p");
  const div = document.createElement("div");
  div.className = "main__dog-section__btn";

  let dogBehave = dog.isGoodDog === true ? "Bad Dog!" : "Good Dog!";
  let naughtyDog = dog.isGoodDog === true ? "<em>Is naughty?</em> no!" : "<em>Is naughty?</em> yes!"
  
  button.innerText = dogBehave;
  text.innerHTML = naughtyDog
  
  button.addEventListener('click', () => {
    dog.isGoodDog = !dog.isGoodDog
    if(dog.isGoodDog === true){
      button.innerText = "Bad Dog!"
      text.innerHTML = "<em>Is naughty?</em> no!"
    } 
    else{
      button.innerText = "Good Dog!"
      text.innerHTML = "<em>Is naughty?</em> yes!"
    } 
    
    console.log(dog.isGoodDog)
  })

  div.append(text, button);
  return div;
}

const createDogCard = (dog) => {
  const section = createSection();
  const header = document.createElement("h2");
  header.innerText = dog.name;

  const img = document.createElement("img");
  img.setAttribute("src", dog.image);

  const desc = createDogCardDesc(dog.bio);
  const bottomSection = createDogCardBottomSection(dog);

  section.append(header, img, desc, bottomSection);

  return section;
};

function createForm() {
  const form = document.createElement("form");

  const nameInput = createInput("name");
  const imgInput = createInput("image", "url");
  const bioInput = createInput("bio", "textarea");
  const submitInput = createInput("submit", "submit", "Let's add a dog!");

  const nameLabel = createLabel("name", "Dog's name");
  const imgLabel = createLabel("image", "Dog's picture");
  const bioLabel = createLabel("bio", "Dog's bio");

  form.className = "form";
  submitInput.className = "form__button";

  form.append(
    nameLabel,
    nameInput,
    imgLabel,
    imgInput,
    bioLabel,
    bioInput,
    submitInput
  );
  return form;
}

function createInput(idName, type = "text", value) {
  let input = null;

  if (type === "textarea") {
    input = document.createElement("textarea");
    input.setAttribute("rows", "5");
  } else {
    input = document.createElement("input");
    input.setAttribute("type", type);
  }

  input.setAttribute("id", idName);
  input.setAttribute("name", idName);

  if (value) input.setAttribute("value", value);

  return input;
}

function createLabel(forAttr, text) {
  const label = document.createElement("label");
  label.attributes.for = forAttr;
  label.innerText = text;

  return label;
}

function renderMainForm() {
  const section = createSection();
  const form = createForm();
  const h2 = document.createElement("h2");

  h2.innerText = "Add a new Dog";

  section.append(h2, form);

  return section;
}

function renderDogList(dogsArr) {
  const listContainer = document.querySelector(".dogs-list");
  for (const dog of dogsArr) {
    const item = createDogListItem(dog);
    listContainer.append(item);
  }
}

renderDogList(data);

const formButton = document.querySelector(".dogs-list__button--add");
const dogContainer = document.querySelector(".main");

formButton.addEventListener("click", () => {
  dogContainer.innerHTML = "";
  const section = createSection();

  const titleNewDog = document.createElement("h2");
  titleNewDog.innerText = "Add a new Dog";

  const createDogForm = createForm();

  dogContainer.append(section);
  section.append(titleNewDog, createDogForm);
  console.log("test form");
});

function createForm() {
  const form = document.createElement("form");
  form.className = "form";

  const lableDogName = document.createElement("lable");
  lableDogName.innerText = "Dog's name";
  const inputDogName = document.createElement("input");
  inputDogName.type = "text";
  inputDogName.setAttribute("id", "name");
  inputDogName.setAttribute("name", "name");

  const labelDogImg = document.createElement("lable");
  labelDogImg.innerText = "Dog's picture";
  const inputDogImg = document.createElement("input");
  inputDogImg.type = "img";
  inputDogImg.setAttribute("id", "image");
  inputDogImg.setAttribute("name", "image");

  const lableDogBio = document.createElement("lable");
  lableDogBio.innerText = "Dog's bio";
  const inputDogBio = document.createElement("textarea");
  inputDogBio.type = "text";
  inputDogBio.setAttribute("id", "bio");
  inputDogBio.setAttribute("name", "bio");
  inputDogBio.setAttribute("rows", "5");

  const submit = document.createElement("input");
  submit.type = "submit";
  submit.setAttribute("id", "submit");
  submit.setAttribute("name", "submit");
  submit.setAttribute("value", "Let's add a dog!");
  submit.className = "form__button";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    
    data.id++;
    data.unshift({
      // id: data[data.lenght -1].id ++,
      id: 1,
      name: inputDogName.value,
      bio: inputDogBio.value,
      isGoodDog: true,
      image: inputDogImg.value,
    });

    const li = document.createElement("li");
    const listContainer = document.querySelector(".dogs-list__button--add");

    li.className = "dogs-list__button";
    li.innerText = inputDogName.value;

    listContainer.after(li);
    li.addEventListener('click', () => {
      dogContainer.innerHTML = "";
  
      let card = createDogCard(data[0]);
      dogContainer.append(card);
    })
  });

  form.append(
    lableDogName,
    inputDogName,
    labelDogImg,
    inputDogImg,
    lableDogBio,
    inputDogBio,
    submit
  );

  return form;
}
