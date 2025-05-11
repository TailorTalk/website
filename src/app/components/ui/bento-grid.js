import { cn } from "@/app/lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-5 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-gray-200 bg-white p-6 duration-300 hover:border-gray-300 hover:shadow-xl transform transition-transform group-hover/bento:scale-105",
        className
      )}>
      {header}
      <div className=" ">
        <div className="flex items-center mb-2">
          <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-500">
            {icon}
          </div>
          <h3 className="font-sans text-lg font-semibold text-gray-800">
            {title}
          </h3>
        </div>
        <div className="font-sans text-xs font-normal leading-relaxed text-gray-600">
          {description}
        </div>
      </div>
    </div>
  );
};