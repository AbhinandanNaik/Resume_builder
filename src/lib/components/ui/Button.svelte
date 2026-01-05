<script lang="ts">
  import { cn } from "$lib/utils"; // We need a utility for class merging, or just template literals
  
  export let variant: 'primary' | 'secondary' | 'ghost' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let href: string | undefined = undefined;
  export let className: string = '';

  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-95";
  
  const variants = {
    primary: "bg-primary text-primary-content hover:bg-primary/90 shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]",
    secondary: "border border-white/20 hover:bg-white/10 text-white backdrop-blur-sm",
    ghost: "hover:bg-white/5 text-gray-300 hover:text-white"
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-8 text-base",
    lg: "h-14 px-10 text-lg"
  };

  $: classes = \`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className}\`;
</script>

{#if href}
    <a {href} class={classes}>
        <slot />
    </a>
{:else}
    <button class={classes} on:click>
        <slot />
    </button>
{/if}
