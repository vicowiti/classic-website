import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <section className="menu-section">
      <article className="menu-banner">
        <p className="menu-banner-text">Our Menu</p>
      </article>
      <article className="servings">
        <div>
          <div className="menu-item">
            <h2>Servings</h2>
            <div className="food-item">
              <p>BEEF</p>
              <aside>200</aside>
            </div>

            <div className="food-item">
              <p>LIVER</p>
              <aside>200</aside>
            </div>

            <div className="food-item">
              <p>FISH</p>
              <aside>200</aside>
            </div>

            <div className="food-item">
              <p>PORK</p>
              <aside>200</aside>
            </div>

            <div className="food-item">
              <p>CHICKEN</p>
              <aside>300</aside>
            </div>

            <div className="food-item">
              <p>BEANS</p>
              <aside>150</aside>
            </div>

            <div className="food-item">
              <p>DENGU</p>
              <aside>150</aside>
            </div>
          </div>
          <div className="menu-item">
            <h2>Accompaniments</h2>
            <div>
              <p>UGALI</p>
              <p>RICE</p>
              <p>CHAPATI</p>
              <p>MASHED POTATOES</p>
            </div>
          </div>
          <div className="menu-item">
            <h2>Greens</h2>
            <div className="food-item">
              <p>SUKUMA</p>
              <aside>30</aside>
            </div>
            <div className="food-item">
              <p>SPINACH</p>
              <aside>30</aside>
            </div>
            <div className="food-item">
              <p>KIENYEJI</p>
              <aside>30</aside>
            </div>
            <div className="food-item">
              <p>CABBAGE</p>
              <aside>30</aside>
            </div>
          </div>

          <div className="menu-item">
            <h2>Fruits</h2>
            <div className="food-item">
              <p>2pc BANANA</p>
              <aside>50</aside>
            </div>
            <div className="food-item">
              <p>PINEAPPLE</p>
              <aside>50</aside>
            </div>
            <div className="food-item">
              <p>WATERMELON</p>
              <aside>50</aside>
            </div>
            <div className="food-item">
              <p>AVOCADO</p>
              <aside>50</aside>
            </div>
          </div>
        </div>
      </article>
      <div className="to-action">
        <a href="https://wa.me/+254726678092">
          <button className="to-action-btn1">Order Now</button>
        </a>
        <Link href="./assets/menu.pdf" locale={false}>
          <button className="to-action-btn2">PDF Menu</button>
        </Link>
      </div>
    </section>
  );
};

export default Menu;
