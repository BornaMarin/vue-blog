export default {
  methods: {
    storeInSessionStorage(key, value) {
      sessionStorage.setItem(key, JSON.stringify(value));
    },
    fetchFromSessionStorage(key) {
      const storedValue = sessionStorage.getItem(key);
      try {
        return JSON.parse(storedValue);
      } catch (e) {
        return storedValue;
      }
    },
  },
};
