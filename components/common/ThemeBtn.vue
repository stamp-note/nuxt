<template>
    <div
        class="z-20"
        @click="toggleTheme"
    >
      <u-avatar
          :ui="{
             background: 'bg-red-100 dark:bg-red-800 hover:bg-red-200 dark:hover:bg-red-700 cursor-pointer',
          }"
      >
        <span
            class="flex dark:hidden"
        >
          <icon
              name="ph:sun-fill"
              size="20"
          />
        </span>
        <span
            class="hidden dark:flex"
        >
          <icon
              name="ph:moon-fill"
              size="20"
          />
        </span>
      </u-avatar>
    </div>
</template>
<script setup lang="ts">
import {useTheme} from "~/composables/theme";

const {toggleTheme} = useTheme();


</script>