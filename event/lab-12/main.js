const addBtn = document.querySelector('.btn-add');

let isAdd = false;

addBtn.addEventListener('click', function () {
  const addForm = document.querySelector('.form-add');
  if (isAdd) {
    addForm.hidden = false;
    addBtn.textContent = 'Cancel';
    isAdd = !isAdd;
    return;
  }

  addForm.hidden = true;
  addBtn.textContent = 'Add';
  isAdd = !isAdd;
});
