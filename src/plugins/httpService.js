import Vue from "vue";
import { $apiService } from "@/services/ApiService";

Vue.mixin({
  computed: {
    $apiService: () => $apiService,
  },
});
