import { useQuery } from "@tanstack/react-query";
import type { Product } from "../backend.d";
import { SAMPLE_PRODUCTS } from "../data/sampleProducts";
import { useActor } from "./useActor";

export function useGetAllProducts() {
  const { actor } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return SAMPLE_PRODUCTS;
      try {
        const result = await actor.getAllProducts();
        // If backend returns empty, fall back to sample products
        return result.length > 0 ? result : SAMPLE_PRODUCTS;
      } catch {
        return SAMPLE_PRODUCTS;
      }
    },
    // Don't wait for actor — show sample products immediately via initialData
    enabled: true,
    initialData: SAMPLE_PRODUCTS,
    staleTime: 30_000,
  });
}

export function useGetProductsByCategory(category: string) {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products", "category", category],
    queryFn: async () => {
      if (!actor) return SAMPLE_PRODUCTS;
      try {
        if (category === "all") return actor.getAllProducts();
        return actor.getProductsByCategory(category);
      } catch {
        return SAMPLE_PRODUCTS;
      }
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSearchProducts(searchTerm: string) {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products", "search", searchTerm],
    queryFn: async () => {
      if (!actor) return SAMPLE_PRODUCTS;
      try {
        if (!searchTerm.trim()) return actor.getAllProducts();
        return actor.searchProductsByName(searchTerm);
      } catch {
        return SAMPLE_PRODUCTS;
      }
    },
    enabled: !!actor && !isFetching,
  });
}
