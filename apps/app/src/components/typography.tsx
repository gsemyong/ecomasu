import { cn } from "@/lib/utils";

export function H1(props: React.ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        props.className
      )}
    >
      {props.children}
    </h1>
  );
}

export function P(props: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p
      {...props}
      className={cn("leading-7 [&:not(:first-child)]:mt-6", props.className)}
    >
      {props.children}
    </p>
  );
}

export function H3(props: React.ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      {...props}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        props.className
      )}
    >
      {props.children}
    </h3>
  );
}

export function Large(props: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props} className={cn("text-lg font-semibold", props.className)}>
      {props.children}
    </div>
  );
}

export function Small(props: React.ComponentPropsWithoutRef<"small">) {
  return (
    <small
      {...props}
      className={cn("text-sm font-medium leading-none", props.className)}
    >
      {props.children}
    </small>
  );
}
