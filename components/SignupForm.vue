<script setup>
const client = useSupabaseClient();

const signedUp = ref(false);
const loading = ref(false);
const apiError = ref(false);
const errorMsg = ref("");
const formState = ref({
  name: "",
  email: "",
});

const validate = (state) => {
  const errors = [];
  if (!state.name) errors.push({ path: "name", message: "Required" });
  if (!state.email) errors.push({ path: "email", message: "Required" });
  return errors;
};

async function submit(event) {
  apiError.value = false;
  loading.value = true;
  try {
    // Test for valid email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(event.data.email)) {
      throw "Please enter a valid email address";
    }

    // Check for existing email
    const { data: users, error: userError } = await client
      .from("users")
      .select("*")
      .eq("email", event.data.email);

    if (users.length) {
      throw "This email already has already been added.";
    }

    // Create new entry
    const { data, error } = await client
      .from("users")
      .insert([
        {
          name: event.data.name,
          email: event.data.email,
        },
      ])
      .select();
    if (error) {
      throw "Opps! Something went wrong, please try again.";
    }
    signedUp.value = true;
  } catch (err) {
    apiError.value = true;
    errorMsg.value = err;
  } finally {
    loading.value = false;
  }
}

function resetForm() {
  formState.value.name = "";
  formState.value.email = "";
  signedUp.value = false;
}
</script>

<template>
  <UModal v-model="signedUp">
    <div class="flex flex-col justify-center items-center px-12 py-12">
      <h2 class="font-bold text-3xl mb-4">Confirmed!</h2>
      <p class="text-center mb-8">
        Thank you for joining the waitlist. You will receive more updates soon on the release of the
        course!
      </p>
      <UButton
        @click="resetForm"
        type="button"
        variant="outline"
        size="xl"
        label="Close"
        :block="true"
        class="shadow-md"
      />
    </div>
  </UModal>

  <UForm
    :validate="validate"
    @submit="submit"
    :state="formState"
    class="flex flex-col max-w-screen-sm w-full sm:flex-row gap-6 sm:gap-8 mb-8"
  >
    <UFormGroup name="name">
      <UInput v-model="formState.name" size="xl" placeholder="Name" />
    </UFormGroup>
    <UFormGroup name="email">
      <UInput v-model="formState.email" size="xl" type="email" placeholder="Email" />
    </UFormGroup>
    <UButton
      type="submit"
      variant="outline"
      size="xl"
      label="Join the waitlist"
      class="w-full sm:w-fit self-start shadow-md"
      :loading="loading"
    />
  </UForm>
  <p v-if="apiError" class="text-red-500">
    {{ errorMsg }}
  </p>
</template>

<style scoped></style>
