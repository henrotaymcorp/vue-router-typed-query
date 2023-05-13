import { RouteLocationNormalizedLoaded, useRoute, useRouter } from "vue-router";

const whenReady = async <TValue>(
  callback: (route: RouteLocationNormalizedLoaded) => TValue
): Promise<TValue> => {
  const route = useRoute();
  await useRouter().isReady();

  return callback(route);
};

export default whenReady;
