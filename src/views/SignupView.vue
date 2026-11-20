<template>
  <main class="signup">
    <h1>Sign up</h1>

    <form class="signup-form" @submit.prevent="showFeedback = true">
      <label for="signup-email">Email</label>
      <input
        id="signup-email"
        type="email"
        autocomplete="email"
        required
      />

      <label for="signup-password">Password</label>
      <input
        id="signup-password"
        v-model="password"
        type="password"
        autocomplete="new-password"
        :aria-invalid="showFeedback && passwordErrors.length > 0"
        :aria-describedby="showFeedback ? 'password-feedback' : null"
        @blur="showFeedback = showFeedback || password.length > 0"
      />

      <div id="password-feedback" aria-live="polite">
        <div v-if="showFeedback && passwordErrors.length" class="error">
          <strong>The password is not valid.</strong>
          <ul>
            <li v-for="error in passwordErrors" :key="error">
              {{ error }}
            </li>
          </ul>
        </div>
        <p v-else-if="showFeedback" class="success">
          The password is valid.
        </p>
      </div>

      <button type="submit">Sign up</button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'SignupView',

  data() {
    return {
      password: '',
      showFeedback: false,
    }
  },

  computed: {
    passwordErrors() {
      const password = this.password
      const errors = []

      if (password.length < 8 || password.length > 14) {
        errors.push('Use 8 to 14 characters.')
      }
      if (!/[A-Z]/.test(password)) {
        errors.push('Include at least one uppercase letter.')
      }
      if ((password.match(/[a-z]/g) || []).length < 2) {
        errors.push('Include at least two lowercase letters.')
      }
      if (!/[0-9]/.test(password)) {
        errors.push('Include at least one number.')
      }
      if (!/^[A-Z]/.test(password)) {
        errors.push('Start with an uppercase letter.')
      }
      if (!password.includes('_')) {
        errors.push('Include an underscore (_).')
      }

      return errors
    },
  },
}
</script>

<style scoped>
.signup {
  box-sizing: border-box;
  width: 100%;
  max-width: 26rem;
  margin: 2rem auto;
  padding: 0 1rem;
  color: #243247;
}

.signup h1 {
  text-align: center;
}

.signup-form {
  display: grid;
  gap: 0.6rem;
  padding: 1.5rem;
  border: 1px solid #cbd5df;
  border-radius: 12px;
  background: #f3f6f8;
  text-align: left;
}

.signup-form label {
  font-weight: 600;
}

.signup-form input {
  box-sizing: border-box;
  width: 100%;
  padding: 0.65rem;
  border: 1px solid #8795a4;
  border-radius: 6px;
  font: inherit;
}

.signup-form input[aria-invalid='true'] {
  border-color: #a12626;
}

.signup-form button {
  justify-self: center;
  padding: 0.6rem 1.5rem;
  border: 0;
  border-radius: 6px;
  background: #28599a;
  color: white;
  font: inherit;
  cursor: pointer;
}

.signup-form button:hover {
  background: #1d4479;
}

.signup-form :focus-visible {
  outline: 3px solid #356bb0;
  outline-offset: 2px;
}

.error {
  color: #922323;
}

.error ul {
  margin: 0.4rem 0 0;
  padding-left: 1.25rem;
}

.success {
  margin: 0;
  color: #216439;
}
</style>