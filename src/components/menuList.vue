<template>
    <div>
    <v-menu offset-y
      open-on-hover
      close-on-click
      content-class
    >
      <template v-slot:activator="{ on }">
        <v-btn
            rounded
            text
            v-on="on"
        >
        <strong>
          {{subpages.label}}
        </strong>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(subpage, index) in subpages.subpages"
          :key="index"
          :to="subpage.url"
          
        >
          <v-list-item-title>
            {{subpage.label.toUpperCase()}}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </div>
</template>

<script>
export default {
    name: "muneList",
    props: {
        subpages: Object
    }

}
</script>

<style>

</style>