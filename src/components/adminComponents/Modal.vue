<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-card">
          <div class="modal-card-head">
            <h2 class="modal-card-title">texte</h2>
            <div class="delete" @click="_toggleModal"></div>
          </div>
          <div class="modal-card-body">
            <div class="field">
              <label for="nomFiliere">Nom du filière</label>
              <input
                class="input is-small"
                type="text"
                name="nomFiliere"
                placeholder="Entrer le nom du filière"
                v-model="nameToAdd"
              />
            </div>
          </div>
          <div class="modal-card-foot">
            <a
              href="#"
              class="button is-small is-success"
              @click="_addNewFiliere"
              >Ajouter</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>