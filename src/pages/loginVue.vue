<template>
  
    <v-card width="600"  class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Loging</h1>
        </v-card-title>
        <v-card-text>
        <v-form>
          <v-text-field
          label ="Username"
          prepend-icon ="mdi-account-circle">
          </v-text-field>
          <v-text-field
          prepend-icon ="mdi-lock"
          :append-icon ='showPassword ? "mdi-eye" :  "mdi-eye-off"'
          @click:append ="showPassword=!showPassword"
          :type ='showPassword ? "text": "password"'
          label ="Password">
          </v-text-field>
        </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="success">Register</v-btn>
          <v-spacer></v-spacer>
          <v-btn color ="info">Loging</v-btn>
        </v-card-actions>

    </v-card> 

</template>

<script>
export default {

}
</script>

<style>

</style>