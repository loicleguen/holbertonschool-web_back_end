#!/usr/bin/env python3
"""Module that defines a function to safely get a value from a dictionary."""
from typing import Any, Union, Mapping, TypeVar

T = TypeVar('T')


def safely_get_value(dct: Mapping,
                     key: Any,
                     default: Union[T, None] = None) -> Union[Any, T]:
    """Returns the value for key in dct if it exists,
    otherwise returns default."""
    if key in dct:
        return dct[key]
    else:
        return default
