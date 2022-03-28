export const feed = () => {

    const timeline = document.createElement('div');
    timeline.setAttribute('class', 'box-feed');
    timeline.innerHTML = `
    <link rel="stylesheet" href="./pages/feed/feed.css"/> 
    <header class="header-feed">    
      <img src="../img/logo.png" alt="Logotype" class="logo-icon">
      <section class="menu">
        <input id="menu-toggle" type="checkbox" />
        <label class="menu-btn" for="menu-toggle">
        <span></span>
        </label>
        <ul class="menu-box">
            <li><a class="menu-item" href="#">Logoff</a></li>
        </ul>
      </section>
    </header>    
      `;

    return timeline;
};