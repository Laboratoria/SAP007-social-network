export function header() {
  const header= document.createElement('div');
  header.innerHTML = `
    <header class="main-header">
        <img class="logo">
        <nav class="menu-header" >
            <ul >
                <li class="menu-option" id="logout-btn">Sair</li>
            </ul>
        </nav>
        <div class="line1"></div>
    </header>
    `;
    return header;
};


