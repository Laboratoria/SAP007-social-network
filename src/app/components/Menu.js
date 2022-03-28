/* eslint-disable no-return-assign */
export function Menu(toggleModalPlus, toggleModalProfile) {
  const d = document;
  // Menu
  const menu = d.createElement('nav');
  menu.classList.add('menu');
  menu.id = 'menu';

  // iconos del menu
  // icono 1
  const itemHome = d.createElement('a');
  itemHome.classList.add('menu__link', 'home');
  const iconHome = document.createElement('i');
  iconHome.classList.add('icon-home');

  itemHome.append(iconHome);

  // evento del ancla
  itemHome.addEventListener('click', () => window.location.hash = '#/timeline');

  // icono 2
  const itemLupa = d.createElement('a');
  itemLupa.classList.add('menu__link');
  const iconLupa = document.createElement('i');
  iconLupa.classList.add('icon-lupa');

  itemLupa.append(iconLupa);
  // icono 3
  const itemPlus = d.createElement('a');
  itemPlus.classList.add('menu__link');
  const iconPlus = document.createElement('i');
  iconPlus.classList.add('icon-addPost');

  itemPlus.append(iconPlus);
  itemPlus.addEventListener('click', () => {
    const modalProfile = document.getElementById('modalProfile');
    if (!modalProfile.classList.contains('cerrado')) {
      toggleModalProfile();
    }
    toggleModalPlus();
  });
  // icono 4
  const itemReseña = d.createElement('a');
  itemReseña.classList.add('menu__link');
  const iconReseña = document.createElement('i');
  iconReseña.classList.add('icon-comment');

  itemReseña.append(iconReseña);
  // icono 5
  const itemPerfil = d.createElement('a');
  itemPerfil.classList.add('menu__link', 'user');
  const iconPerfil = document.createElement('i');
  iconPerfil.classList.add('icon-user1');

  itemPerfil.append(iconPerfil);
  itemPerfil.addEventListener('click', () => {
    const modalPlus = document.getElementById('modalPlus');
    if (!modalPlus.classList.contains('cerrado')) {
      toggleModalPlus();
    }
    toggleModalProfile();
  });

  menu.append(itemHome);
  // menu.append(itemLupa);
  menu.append(itemPlus);
  // menu.append(itemReseña);
  menu.append(itemPerfil);

  return menu;
}

// LISTAS DESPLEGABLES

export function MenuList(abrirModalCreatePost) {
  const modalContenedor = document.createElement('div');
  modalContenedor.id = 'modalPlus';
  modalContenedor.classList.add('modal__contenedor', 'align-end', 'cerrado');

  const modalLista = document.createElement('div');
  modalLista.classList.add('modal__lista');

  const itemsPublicacion = document.createElement('button');
  itemsPublicacion.classList.add('modal__button');
  itemsPublicacion.textContent = 'Publicación';

  itemsPublicacion.addEventListener('click', () => {
    abrirModalCreatePost();
  });

  const itemsReseña = document.createElement('button');
  itemsReseña.classList.add('modal__button');
  itemsReseña.textContent = 'Reseña';

  const itemsHistoria = document.createElement('button');
  itemsHistoria.classList.add('modal__button');
  itemsHistoria.textContent = 'Historia';

  modalLista.append(itemsPublicacion);
  // modalLista.append(itemsReseña);
  // modalLista.append(itemsHistoria);

  modalContenedor.append(modalLista);

  const toggleModalPlus = () => {
    modalContenedor.classList.toggle('cerrado');
  };

  modalContenedor.addEventListener('click', () => {
    toggleModalPlus();
  });

  return {
    menuModalPlus: modalContenedor,
    toggleModalPlus,
  };
}

export function ProfileList(abrilModalCerrarSesion) {
  const modalContenedorPerfil = document.createElement('div');
  modalContenedorPerfil.id = 'modalProfile';
  modalContenedorPerfil.classList.add(
    'modal__contenedor',
    'align-end',
    'cerrado',
  );

  const modalLista = document.createElement('div');
  modalLista.classList.add('modal__lista');

  const itemsPerfil = document.createElement('button');
  itemsPerfil.classList.add('modal__button');
  itemsPerfil.textContent = 'Ver perfil';

  const itemsCerrarSesion = document.createElement('button');
  itemsCerrarSesion.classList.add('modal__button');
  itemsCerrarSesion.textContent = 'Cerrar sesión';

  itemsCerrarSesion.addEventListener('click', () => {
    abrilModalCerrarSesion();
  });
  /** ***************************************** */

  itemsPerfil.addEventListener('click', () => {
    window.location.hash = '#/muro';
  });

  /** ************************************* */
  modalLista.append(itemsPerfil);
  modalLista.append(itemsCerrarSesion);

  modalContenedorPerfil.append(modalLista);

  const toggleModalProfile = () => {
    modalContenedorPerfil.classList.toggle('cerrado');
  };

  modalContenedorPerfil.addEventListener('click', () => {
    toggleModalProfile();
  });

  return {
    menuModalProfile: modalContenedorPerfil,
    toggleModalProfile,
  };
}
