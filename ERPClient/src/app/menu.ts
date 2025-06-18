export class MenuModel {
  name: string = '';
  icon: string = '';
  url: string = '';
  isTitle: boolean = false;
  subMenus: MenuModel[] = [];
}

export const Menus: MenuModel[] = [
  {
    name: 'Anasayfa',
    icon: 'fas fa-solid fa-home',
    url: '/',
    isTitle: false,
    subMenus: [],
  },
  {
    name : "Ana Grup",
    icon: "fa-solid fa-trowel-bricks",
    url: '',
    isTitle: false,
    subMenus: [
      {
        name: 'Müşteriler',
        icon: 'fas fa-users',
        url: '/customers',
        isTitle: false,
        subMenus: []
      },
      {
        name: "Depolar",
        icon: "fa-solid fa-warehouse",
        url: '/depots',
        isTitle: false,
        subMenus: []
      },
      {
        name: "Ürünler",
        icon: "fa-solid fa-boxes-stacked",
        url: '/products',
        isTitle: false,
        subMenus: []
      }
    ]
  }
];
