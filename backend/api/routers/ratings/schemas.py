from __future__ import annotations
from pydantic import BaseModel
from datetime import datetime
from typing import Dict, List, Optional


class RatingBase(BaseModel):
    rating_clarity: int
    rating_interactivity: int
    rating_relevance: int
    rating_comprehension: int
    timestamp: datetime
    session_type: str


class RatingIn(BaseModel):
    rating_clarity: int
    rating_interactivity: int
    rating_relevance: int
    rating_comprehension: int
    timestamp: datetime
    programme_id: int
    room_id: int


class RatingOut(RatingBase):
    id: int
    rating_overall: float
    subject_id: int
    programme_id: int
    professor_id: int
    faculty_id: int
    room_id: int


class RatingAverageOut(BaseModel):
    rating_overall_average: float
    rating_clarity_average: float
    rating_interactivity_average: float
    rating_relevance_average: float
    rating_comprehension_average: float


class WeekRatings(BaseModel):
    clarity: Optional[float] = None
    interactivity: Optional[float] = None
    relevance: Optional[float] = None
    comprehension: Optional[float] = None
    overall: Optional[float] = None


class GraphDataRatings(BaseModel):
    week_ratings: Dict[str, WeekRatings]
