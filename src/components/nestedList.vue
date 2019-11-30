<template>
 <v-list-group
    no-action
    sub-group
    dark
    >

    <template v-slot:activator>
        <v-list-item-content>
            <v-list-item-title>
                <strong>{{subpages.label.toUpperCase()}}</strong>
            </v-list-item-title>        
        </v-list-item-content>
    </template>
    <v-list-item
        v-for="subpage in subpages.subpages"
        :key="subpage.label"
        :to="subpage.url"
        link
    >
        <v-list-item-title
            v-text="subpage.label.toUpperCase()"
        ></v-list-item-title>
    </v-list-item>   

    </v-list-group>
  
</template>

<script>
export default {
    name: "nestedList",
    props: {
        subpages: Object
    }

}
</script>

<style>

</style>