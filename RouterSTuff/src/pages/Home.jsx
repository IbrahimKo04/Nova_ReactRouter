import React from 'react'

function Home() {
  return (
      <div >
        <div className="container mx-auto p-4 pt-6 md:p-6 ">
          <h1 className="text-5xl font-bold text-blue-600">This is a User Dashboard</h1>
          <p className="text-xl text-blue-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit a reiciendis tempore hic est nesciunt delectus quidem, laborum quisquam totam error assumenda sequi fugiat repellat. Quam nulla assumenda deserunt!
          Ea iste ratione eveniet aperiam sint suscipit dolorum deserunt natus voluptatibus architecto quia a, minus laboriosam consequatur! Repudiandae totam magnam molestiae fugit eos temporibus quo, reprehenderit non eum. Cumque, assumenda.
          Atque voluptas veniam porro magni similique cum optio, nemo soluta reiciendis quasi facere voluptate nobis ullam voluptatum, maiores esse architecto exercitationem in! Labore corrupti dolorum est explicabo repellendus. Quis, magnam.
          Ad, aut quisquam! Impedit dolor maiores amet vitae nisi qui nobis ex animi! Aperiam, non repellendus quas laboriosam excepturi nesciunt laudantium quisquam aspernatur facilis unde debitis impedit dignissimos quibusdam numquam.
          Sequi inventore non itaque perferendis quia! Vel ipsam quia nostrum esse voluptatum sapiente praesentium, labore, iure repellat, error qui officiis consequatur deserunt nisi beatae obcaecati dolores quibusdam dolor non accusamus!</p>
          <button onClick={() => {window.location.href = '/About'}} className="bg-blue-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mt-6">About Us </button>
        </div>
      </div>
  )
}

export default Home