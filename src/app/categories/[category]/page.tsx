import BackBtn from "@/components/BackBtn";
import CardAnalysis from "@/components/CardAnalysis";
import Drawer from "@/components/Drawer";
import ErrorComponent from "@/components/ErrorComponent";
import Header from "@/components/Header";
import ItemTransaction from "@/components/ItemTransaction";
import LogoutBtn from "@/components/LogoutBtn";
import FormExpense from "@/components/pages/categories/FormExpense";
import FormIncome from "@/components/pages/categories/FormIncome";
import Popover from "@/components/Popover";
import { icons } from "@/utils/icons";
import { Suspense } from "react";

type Params = Promise<{ category: string }>;

interface CategoryPageProps {
  params: Params;
}

export default async function CategoryPage(props: CategoryPageProps) {
  const { params } = props;
  const { category } = await params;
  const icon = icons.find(
    (ic) => ic.label.toLowerCase() === category.toLowerCase()
  );

  if (!icon) {
    return (
      <ErrorComponent
        title={`Oops can't find category ${
          category.charAt(0).toUpperCase() + category.slice(1)
        }`}
        desc="The category you are looking for does not exist."
      />
    );
  }

  return (
    <Suspense>
      <Header>
        <BackBtn />
        <span className="text-xl font-bold text-darkmode-green-bar">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </span>
        <LogoutBtn />
      </Header>
      <CardAnalysis />
      <Drawer className="justify-start overflow-y-auto items-start px-8 pt-4 max-h-[33rem]">
        {Array.from({ length: 4 }).map((_, i) => (
          <ItemTransaction key={i} isFirstItem={i === 0} isLastItem={i === 3} />
        ))}
        <div className="w-full font-semibold flex z-[99999999] justify-center fixed bottom-[96px] right-0 left-0 items-center">
          <Popover
            triggerElement={
              <span className="bg-maingreen px-4 py-2 rounded-md">
                Add Income
              </span>
            }
          >
            <FormIncome
              category={category.charAt(0).toUpperCase() + category.slice(1)}
            />
          </Popover>
          <Popover
            triggerElement={
              <span className="bg-oceanblue-btn text-white px-4 py-2 rounded-md">
                Add Expense
              </span>
            }
          >
            <FormExpense
              category={category.charAt(0).toUpperCase() + category.slice(1)}
            />
          </Popover>
        </div>
      </Drawer>
    </Suspense>
  );
}
