<template>
  <v-row
    style="height: 100%"
    clas="mb-0"
  >
    <v-col
      class="pa-0"
    >
      <v-img
        :src="require('@/assets/login-bg.png')"
        height="100vh"
      />
    </v-col>
    <v-col class="login-card pa-0">
      <v-card
        width="30vw"
        class="pa-4"
        style="border-radius: 32px; box-shadow: 5px 5px 60px #A19F9F29;"
      >
        <v-toolbar
          flat
          dense
        >
          <v-toolbar-title class="title-login">Connexion</v-toolbar-title>
        </v-toolbar>
        <v-form class="pa-3">
          <label class="label-input">Identifiant</label>
          <v-text-field
            placeholder="Saisissez votre identifiant"
            solo
            hide-details
            dense
            style="max-width: 350px;"
            class="mb-2"
            required
          >
            <template v-slot:prepend>
              <v-chip
                label
                class="rounded-lg"
                color="primary"
              >
                <v-icon>mdi-account</v-icon>
              </v-chip>
            </template>
          </v-text-field>
          <label class="label-input">Mot de passe</label>
          <v-text-field
            placeholder="Saisissez votre mot de passe"
            solo
            hide-details
            dense
            style="max-width: 350px"
            required
          >
            <template v-slot:prepend>
              <v-chip
                label
                class="rounded-lg"
                color="primary"
              >
                <v-icon>mdi-lock</v-icon>
              </v-chip>
            </template>
          </v-text-field>
        </v-form>
        <v-card-actions>
          <v-spacer />
          <v-btn
            rounded
            color="primary"
            class="pa-4"
            to="/"
          >
            Valider
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<style>
  .login-card {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title-login {
    color: #0F0F61;
    letter-spacing: 0px;
    font-weight: bold;
    font-size: 30px;
  }
  
  .label-input {
    color: #979797;
    letter-spacing: -0.4px;
    font-size: 20px;
  }
</style>