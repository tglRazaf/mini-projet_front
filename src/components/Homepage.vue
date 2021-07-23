<template>
  <div id="inscriptionForm1">
    <div class="container">
      <div class="section is-1">
        <div class="image">
          <img src="../assets/environnement.png" alt="" />
        </div>
        <div class="texte">
          <h2 class="subtitle">Subtitle</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            culpa consequuntur, maxime iusto porro neque accusamus eveniet
            facilis quasi? Officiis pariatur atque itaque debitis cumque
            laudantium facere ut delectus consequuntur!
          </p>
          <br />
          <button class="button is-link">Voir plus</button>
        </div>
      </div>
      <hr />
      <div id="histoire" class="section is-2">
        <div class="texte">
          <h2 class="subtitle">Subtitle</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            culpa consequuntur, maxime iusto porro neque accusamus eveniet
            facilis quasi? Officiis pariatur atque itaque debitis cumque
            laudantium facere ut delectus consequuntur!
          </p>
          <br />
          <button class="button is-link">Voir plus</button>
        </div>
        <div class="image">
          <img src="../assets/env2.png" alt="" />
        </div>
      </div>
    </div>
    <div id="contact" class="footer">
      <form action="#" method="post">
        <div class="field">
          <label for="name">Nom</label>
          <input
            class="input is-small"
            type="text"
            name="name"
            id="name_message"
            placeholder="nom"
          />
        </div>
        <div class="field">
          <label for="email">E-mail</label>
          <input
            class="input is-small"
            type="email"
            name="email"
            id="email_message"
            placeholder="e-mail"
          />
        </div>
        <div class="field">
          <label for="message">Message</label>
          <textarea
            class="textarea is-small"
            name="message"
            id="message"
            cols="20"
            rows="10"
            placeholder="Envoyer un message au directeur "
          ></textarea>
        </div>
        <br />
        <button class="button is-outlined is-link" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
};
</script>

<style lang="css" scoped>
.footer {
  background-color: #9e9e9e1e;
  bottom: 0;
  padding: 10px;
}
.section {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
.section.is-1 {
  margin-top: 50px;
}
.section div {
  padding: 10px;
  margin: 0 px 10px;
}
</style>