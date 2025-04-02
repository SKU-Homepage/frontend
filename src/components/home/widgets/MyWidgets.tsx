"use client";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { isEditing, myWidgets } from "@/stores/atoms";
import H from "@/components/home";
import {
  DndContext,
  DragEndEvent,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  TouchSensor,
} from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";

const MyWidgets = () => {
  const [widgets, setWidgets] = useAtom(myWidgets);
  const [onEditing] = useAtom(isEditing);

  useEffect(() => {
    if (!widgets.length) {
      const storedData = localStorage.getItem("selectedWidgets");
      const widgets = storedData ? JSON.parse(storedData) : [];
      setWidgets(widgets);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 모바일에서도 드래그 가능하도록 센서 설정
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor, { activationConstraint: { delay: 100, tolerance: 5 } })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    if (!onEditing) return; // 편집 모드가 아닐 때는 DnD 불가능

    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = widgets.findIndex((w) => w.title === active.id);
      const newIndex = widgets.findIndex((w) => w.title === over.id);
      setWidgets(arrayMove(widgets, oldIndex, newIndex));
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={widgets.map((w) => w.title)} strategy={rectSortingStrategy}>
        {widgets.map((item) =>
          onEditing ? (
            <SortableItem key={item.title} id={item.title}>
              <H.Widget
                title={item.title}
                description={item.description}
                src={item.src}
                url={item.url}
                onEditing={onEditing}
              />
            </SortableItem>
          ) : (
            <H.Widget
              key={item.title}
              title={item.title}
              description={item.description}
              src={item.src}
              url={item.url}
            />
          )
        )}
      </SortableContext>
    </DndContext>
  );
};

export default MyWidgets;
