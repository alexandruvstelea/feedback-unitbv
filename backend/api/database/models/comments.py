from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import ForeignKey
from ..main import AlchemyAsyncBase
from sqlalchemy.sql.sqltypes import DateTime


class Comment(AlchemyAsyncBase):
    __tablename__: str = "comments"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    text: Mapped[str] = mapped_column()
    subject_id: Mapped[int] = mapped_column(ForeignKey("subjects.id"))
    timestamp: Mapped[DateTime] = mapped_column(DateTime)
    programme_id: Mapped[int] = mapped_column(
        ForeignKey("programmes.id"), nullable=True
    )
    room_id: Mapped[int] = mapped_column(ForeignKey("rooms.id"), nullable=True)
    professor_id: Mapped[int] = mapped_column(
        ForeignKey("professors.id"), nullable=True
    )
    faculty_id: Mapped[int] = mapped_column(ForeignKey("faculties.id"), nullable=True)
